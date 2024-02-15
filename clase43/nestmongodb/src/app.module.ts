import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import FirstMiddleware from './middleware/first.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb+srv://alexpinaida55575:HHXI4o0vfaP5bUHT@cluster55575ap.f6civky.mongodb.net/clase43?retryWrites=true&w=majority'),
//     UsersModule
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })

//ConfigModule -> Configuración o el modulo core como tal de configs
//ConfigService se inyecta para usarse como servicio y finalmente usar nuestras variables de ambiente
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      //Inicializar el modulo de mongo con el string de conexión a nuestra BDD
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL'),
      })
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes('*');
  }
}
