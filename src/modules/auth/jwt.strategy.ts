import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./jwt.constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
   constructor() {
      super({
         //compara el Token con la clave para ver si es se origina de este
         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),//token que viene del encabezado header
         ignoreExpiration: false,
         secretOrKey: jwtConstants.secret,//clave
      });
   }

   async validate(payload: any) { //⁡⁢⁣⁣TODO id,username⁡
      return { id: payload.id, username: payload.username };
   }
}


