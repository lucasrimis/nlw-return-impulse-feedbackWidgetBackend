"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submitFeedback_1 = require("./submitFeedback");
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submitFeedback_1.SubmitFeedbackUseCase({ create: async () => { } }, { sendMail: async () => { } });
describe('Submit feedback', () => {
    it('Should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,test.jpg',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,test.jpg'
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,test.jpg'
        })).rejects.toThrow();
    });
    it('should not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'ta tudo bugado',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    });
});
