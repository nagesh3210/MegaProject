import { Client, Account, Databases ,Storage ,Query } from 'appwrite';
import conf from '../conf/conf'


export default Service
{
    client = new Client();
    datatabases;
    bucket;



    constructor()
    {
        this.client
            .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
            .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

}