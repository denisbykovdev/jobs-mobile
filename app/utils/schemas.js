import * as Yup from "yup";

// phone not valid היי, שכחת למלא טלפון

export const registerSchema = Yup.object().shape({
    phone: Yup.string()
        // .required(' יש טעות באחד השדות')
        .required('היי, שכחת למלא טלפון')
        .min(6, "לא פחות מ -6 תווים")
        .max(9, "9 תווים לכל היותר")
});