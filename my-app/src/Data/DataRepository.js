export class DataRepository{
     user = {
        id: 1,
        family: "maks",
        name: "artem",
        secondName: "evgen",
         dataBirthday: "19.09.2002",
        city: "Kazan"
    };
    user2 = {
        id: 2,
        family: "do",
        name: "dima",
        secondName: "rasbers",
        dataBirthday: "19.09.2002",
        city: "Kazan"
    };
    getEmployees() {
        return [this.user, this.user2];
    }

}
