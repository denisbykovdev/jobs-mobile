import * as Yup from "yup";

// phone not valid היי, שכחת למלא טלפון

export const registerSchema = Yup.object().shape({
    phone: Yup.string()
        // .required(' יש טעות באחד השדות')
        .required('היי, שכחת למלא טלפון')
        .min(6, "באסה, המספר לא תקין. איך נשלח לך את הקוד?")
        .max(9, "באסה, המספר לא תקין. איך נשלח לך את הקוד?")
});