import { ConfigService } from '@nestjs/config';
export declare class TwilioService {
    private configService;
    private client;
    constructor(configService: ConfigService);
    sendMessage(to: string, body: string): Promise<boolean>;
}
