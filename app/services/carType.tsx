import engineType from "./engineType";

export default interface carType {
    brand: string;
    name: string;
    color: string;
    engine: engineType;
    trail?: string;
}