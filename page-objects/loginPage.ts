export class LoginPage {
    private page: any;

    constructor(page: any) {
        this.page = page;
    }

    async navigateTo() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.page.fill('[data-test="username"]', username);
        await this.page.fill('[data-test="password"]', password);
        await this.page.click('[data-test="login-button"]');
    }
    async blockPageImages() {

        await this.page.route(
            "**/*.{png,jpg,jpeg,webp, svg}",
            (route) => route.abort()
        )
    }
}