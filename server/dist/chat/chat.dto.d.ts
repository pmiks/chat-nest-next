export interface SendMessageDTO {
    userId?: string;
    message: string;
}
export interface MessageDTO {
    userId: string;
    message: string;
    createDate: string;
    updateDate: string;
}
