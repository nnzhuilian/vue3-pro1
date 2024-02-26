export interface Watch {
    id:number,
    name:string,
    version:number,
    x?:string
}

export type Watches = Array<Watch> // 也可写成Watch[]

