const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Марина",
            "id_3": "Екатерина",
            "id_4": "Татьяна",
            "id_5": "Ольга",
            "id_6": "Инна",
            "id_7": "Людмила",
            "id_8": "Дарья",
            "id_9": "Анна",
            "id_10": "Инга"
        }
    }`,

    professionJson: `{
        "count": 13,
        "list": {     
            "id_1": "cолдат",
            "id_2": "шахтёр",
            "id_3": "слесарь",
            "id_4": "инженер",
            "id_5": "программист",
            "id_6": "водитель",
            "id_7": "машинист",
            "id_8": "дворник",
            "id_9": "механик",
            "id_10": "медсестра",
            "id_11": "врач",
            "id_12": "повар",
            "id_13": "секретарь"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;        // this = personGenerator    
        return obj.list[prop];
    },

    /* функция генерации имени*/
    randomFirstName: function() {
        if (gender == 'Мужчина') 
            return this.randomValue(this.firstNameMaleJson) 
        else 
            return this.randomValue(this.firstNameFeMaleJson);
    },

    /* функция генерации фамилии*/
    randomSurname: function() {
        if (gender == 'Мужчина') 
            return this.randomValue(this.surnameJson)
        else 
            return this.randomValue(this.surnameJson) + 'а';
    },

    /* функция генерации пола*/
    randomGender: function() {
        gender = (this.randomIntNumber(1, 0)) ? this.GENDER_MALE: this.GENDER_FEMALE;  
        return gender;
    },

    /*функция генерации отчества */
    randomPatronName: function() {
        let temp = this.randomValue(this.firstNameMaleJson);
        if (gender == 'Мужчина') {         
            switch (temp) {
                case 'Дмитрий': 
                temp =  'Дмитриевич';
                break;
                case 'Никита': 
                temp =  'Никитович';
                break;    
                case 'Михаил': 
                temp =  'Михайлович';
                break;
                case 'Андрей': 
                temp = 'Андреевич';
                break;
                default: 
                temp=temp +'ович';
                }  
            return temp;
        } else switch (temp) {
                case 'Дмитрий': 
                temp =  'Дмитриевна';
                break;
                case 'Никита': 
                temp =  'Никитовна';
                break;    
                case 'Михаил': 
                temp =  'Михайловна';
                break;
                case 'Андрей': 
                temp = 'Андреевна';
                break;
                default: 
                temp=temp +'овна';      
            }   
        return temp;
    },

    /*функция генерации года рождения*/
    randomYear: function() {
        return this.randomIntNumber(2005, 1960);    
    },

    /* функция генеарции профессии*/
    randomProfession: function() {
        let temp = this.randomValue(this.professionJson);
        if (gender == 'Мужчина') {                          /* новая генерация в случае женских профессий*/
            switch (temp) {
                case 'медсестра': 
                return this.randomProfession();
                case 'секретарь': 
                return this.randomProfession();    
                default: 
                break;
            }
            return temp;
        } else switch (temp) {
                case 'cолдат':                              /* новая генерация в случае мужских профессий*/
                return this.randomProfession();
                case 'шахтёр': 
                return this.randomProfession();   
                case 'слесарь': 
                return this.randomProfession();
                case 'машинист':
                return this.randomProfession();
                case 'механик':
                return this.randomProfession();
                default: 
                break;
            }
        return temp;
    },

    /* функция генерации месяца рождения и его перевода текстовый формат */
    randomMonth: function() {
        let temp = this.randomIntNumber(12, 1);
        switch (temp) {
            case 1: 
            temp = 'января'
            break;
            case 2: 
            temp = 'февраля'
            break;
            case 3: 
            temp = 'марта'
            break;
            case 4: 
            temp = 'апреля'
            break;
            case 5: 
            temp = 'мая'
            break;
            case 6: 
            temp = 'июня'
            break;
            case 7: 
            temp = 'июля'
            break;
            case 8: 
            temp = 'августа'
            break;
            case 9: 
            temp = 'сентября'
            break;
            case 10: 
            temp = 'октября'
            break;
            case 11: 
            temp = 'ноября'
            break;
            case 12: 
            temp = 'декабря'
            break;
            default: 
        }
        return temp;
    },

    /* функция генерации дня рожденья*/
    randomDay: function() {
        let temp =  this.person.monthOfBirth;
        temp = 'февраля';
        if (temp == 'апреля' || temp == 'июня' || temp == 'сентября'|| temp == 'ноября')  
            return this.randomIntNumber(30, 1);
        else if (temp == 'февраля') 
            return this.randomIntNumber(28, 1);
        return this.randomIntNumber(31, 1); 
},

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.patronName = this.randomPatronName();
        this.person.yearOfBirth = this.randomYear();
        this.person.profi = this.randomProfession();
        this.person.monthOfBirth = this.randomMonth();
        this.person.dayOfBirth = this.randomDay();
        return this.person;
    }
};
