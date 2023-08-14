import CalendarLocale from 'rc-picker/lib/locale/de_DE';
import TimePickerLocale from '../../time-picker/locale/de_DE';
import type { PickerLocale } from '../generatePicker';

// Merge into a locale object
const locale: PickerLocale = {
  lang: {
        locale: "de_DE",
        placeholder: "Datum auswählen",
        rangePlaceholder: ["Startdatum", "Enddatum"],
        today: "Heute",
        now: "Jetzt",
        backToToday: "Zurück zu Heute",
        ok: "Ok",
        clear: "Zurücksetzen",
        month: "Monat",
        year: "Jahr",
        timeSelect: "Zeit wählen",
        dateSelect: "Datum wählen",
        monthSelect: "Wähle einen Monat",
        yearSelect: "Wähle ein Jahr",
        decadeSelect: "Wähle ein Jahrzehnt",
        yearFormat: "YYYY",
        dateFormat: "DD.MM.YYYY",
        dayFormat: "DD",
        dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
        monthBeforeYear: true,
        previousMonth: "Vorheriger Monat",
        nextMonth: "Nächster Monat",
        previousYear: "Vorheriges Jahr",
        nextYear: "Nächstes Jahr",
        previousDecade: "Vorheriges Jahrzehnt",
        nextDecade: "Nächstes Jahrzehnt",
        previousCentury: "Vorheriges Jahrhundert",
        nextCentury: "Nächstes Jahrhundert",
        shortWeekDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        shortMonths: [
            "Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
            "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
        ]
    },
    timePickerLocale: {
        placeholder: "Zeit auswählen"
    },
    dateFormat: "DD.MM.YYYY",
    dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
    weekFormat: "YYYY-woche",
    monthFormat: "MMMM"
};

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

export default locale;
