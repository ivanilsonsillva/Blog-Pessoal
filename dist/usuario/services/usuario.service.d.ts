import { DeleteResult, Repository } from "typeorm";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";
import { Usuario } from "../entities/usuario.entity";
export declare class UsuarioService {
    private usuarioRepository;
    private bcrypt;
    constructor(usuarioRepository: Repository<Usuario>, bcrypt: Bcrypt);
    findAll(): Promise<Usuario[]>;
    findById(id: number): Promise<Usuario>;
    findByUsuario(usuario: string): Promise<Usuario | undefined>;
    create(usuario: Usuario): Promise<Usuario>;
    update(usuario: Usuario): Promise<Usuario>;
    delete(id: number): Promise<DeleteResult>;
}
