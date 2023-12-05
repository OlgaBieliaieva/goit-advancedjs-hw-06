/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ITitle {
  title: string;
}

class Component<T extends ITitle> {
  constructor(public props: T) {}
}

class Page extends Component<ITitle> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
