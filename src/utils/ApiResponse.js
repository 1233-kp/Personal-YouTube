class ApiResponse {
    constructor(success, message = "Success", data) {
        this.stausCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode < 400;
    }
}