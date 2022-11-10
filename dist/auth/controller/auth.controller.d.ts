import { AuthService } from '../services/auth.services';
import { UsuarioLogin } from './../entities/usuariologin.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: UsuarioLogin): Promise<any>;
}
