export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkgreen');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
  static readonly HTML = new Tag('HTML', 'lightorange');
  static readonly JAVA = new Tag('JAVA', 'purple');
  static readonly SQL = new Tag('SQL', 'brown');
  static readonly CSS = new Tag('CSS', 'blue');
  static readonly GIT = new Tag('Git', 'darkorange');
  static readonly GITHUB = new Tag('GitHub', 'lightgreen');
  static readonly JIRA = new Tag('Jira', 'grey');

  private constructor(  private readonly key: string,    public readonly color: string){}
  
  toString() {
    return this.key;
  }
}
