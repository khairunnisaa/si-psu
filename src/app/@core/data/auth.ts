import { Observable } from 'rxjs';
import {NbAuthService} from '@nebular/auth';

export abstract class TableAuth extends NbAuthService {
  abstract  login(credentials): Observable<any> ;
  abstract register(user): Observable<any>;
}
