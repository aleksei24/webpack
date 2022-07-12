type ID = string;
type PopTag = string;
type KindOfPopTag = PopTag | null;

interface UserInterface {
  id: ID,
  name: string,
  surname: string;
}

const popularTags: PopTag[] = ['global heating', 'veganism'];
const fashionTags: KindOfPopTag = 'what we want';

// the sign | is called union

let username: string = 'Ben';
let pageNumber: string | number = '1';
let errorMsg: string | null = null;
let user: UserInterface | null = null;
