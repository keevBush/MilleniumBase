import Application from "../models/Application.model";
import Deploy from "../models/Deploy.model";
import DocumentVerification from "../models/DocumentVerification.model";
import Entreprise from "../models/Entreprise.model";
import User from "../models/User.model";
import UserEntreprise from "../models/UserEntreprise.model";
class ModelInit {

    public static getInstance(): ModelInit {
        if (ModelInit.instance == null) {
            ModelInit.instance =  new ModelInit();
        }
        return ModelInit.instance;
    }
    private static instance: ModelInit  =  null;
    constructor() {
        const entreprise = new Entreprise();
        const user = new User ();
        const userEntreprise = new UserEntreprise();
        const application = new Application();
        const documentVerification = new DocumentVerification();
        const deploy = new Deploy();
    }
}
export default ModelInit;
