export class Task {
  constructor(public title: string,
    public desc: string,
    public assignedTo: string,
    public createdOn: any,
    public priority: string,
    public status: string,
    public createdOnDP?: any,
    public id?: string

  ) {

  }
}