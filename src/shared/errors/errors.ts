export class HttpError extends Error {
    public readonly name: string = 'HttpError';
    public readonly status: number;
    public readonly statusText: string;

    constructor({ status, statusText }: { status: number; statusText: string }) {
        super(`${status} ${statusText}`);

        this.status = status;
        this.statusText = statusText;


        Object.setPrototypeOf(this, HttpError.prototype);
    }


    isStatus(status: number): boolean {
        return this.status === status;
    }


    isClientError(): boolean {
        return this.status >= 400 && this.status < 500;
    }


    isServerError(): boolean {
        return this.status >= 500 && this.status < 600;
    }

    toJSON() {
        return {
            name: this.name,
            status: this.status,
            statusText: this.statusText,
            message: this.message,
        };
    }
}