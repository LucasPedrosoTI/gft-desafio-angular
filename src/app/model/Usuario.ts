export class Usuario {
  id: number = 0;
  name: string = '';
  username: string = '';
  email: string = '';
  address = {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
  };
  phone: string = '';
  website: string = '';
  company = {
    name: '',
    catchPhrase: '',
  };
}
