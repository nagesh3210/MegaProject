import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf'


export class AppWriteAuth {

    client = new Client();
    Account;

    constructor() {
        this.client.
            setEndpoint(conf.appWriteUrl).
            setProject(conf.appWriteProjectId);

        this.account = new Account(this.client)
    }


    async createAccont({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password)

            if (userAccount) {
                login
            }

        }
        catch (error) {
            throw error;

        }

    }

    async login({ email, password }) {
        try {
            await this.account.createEmailPasswordSession(email, password)
        }
        catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        }
        catch (error) {
            console.log("Appwrite serive :: logout :: error", error);

        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);

        }
    }


}

const authService = new AppWriteAuth();

export default authService;