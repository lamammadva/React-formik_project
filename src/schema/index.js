import * as yup from "yup";

export const baseSchema=yup.object().shape({
    email:yup.string().email("Lutfen geçerli email giriniz...").required("Email girmek zorunludur!!"),
    age:yup.number().positive("Lütfen positive eded giriniz....").integer("Lütfen yaşınızı rakam olaraq giriniz...").required("Lutfen yasinizi giriniz"),
    password:yup.string().min(5,'Lütfen minimum 5 karakter giriniz...').matches(/[a-zA-Z]/,"Passwordda en az bir herf olmalıdır").matches(/[0-9]/,"Passwordda en az bir rakam olmalidir").matches(/[A-Z]/,"Hec olmasa bir boyuk eded olmalidir").required("Sifre girmek zorunludur"),
    confirmPassword:yup.string().oneOf([yup.ref('password')],"Sifreler eslesmiyor").required("Sifreyi tekrar girmek zorunludur")
  

})
export const advencedFormik=yup.object().shape({
    username:yup.string().min(3,"İstifadeçi adınızı girin").required("İstifadeçi adını girmək mütləkdir"),
    university:yup.string().oneOf(["aztu","adnsu","adu","unec"],"Universiteti seçiniz").required("Universiteti seçiniz zəhmət olmazsa"),
    isAccepted:yup.boolean().oneOf([true],"Şərti qəbul etmek mecburidir").required("Şərti qəbul etmək məcburidir")
  

})