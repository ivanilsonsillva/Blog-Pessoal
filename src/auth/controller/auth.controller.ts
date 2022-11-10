import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { LocalAuthGuard } from '../guard/locaL-auth.guard';
import { AuthService } from '../services/auth.services';
import { UsuarioLogin } from './../entities/usuariologin.entity';

@ApiTags('Usuario')
@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() user: UsuarioLogin): Promise<any> {
        return this.authService.login(user);
    }

}