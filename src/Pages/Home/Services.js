import React from "react";
import khoanhi from "../../assets/images/nhi.jpg";
import ent from "../../assets/images/tai-mui-hong.jpg";
import tim from "../../assets/images/tim-mach.jpg";
import nhakhoa from "../../assets/images/nha-khoa.jpg";
import dalieu from "../../assets/images/da-lieu.jpg";
import mat from "../../assets/images/mat.jpg";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Khoa nhi",
      description:
        "Phát triển với mục tiêu hướng tới tiêu chuẩn chất lượng mô hình bệnh viện quốc tế, đáp ứng nhu cầu khám chữa bệnh chất lượng cao của bệnh nhi và gia đình.",
      img: khoanhi,
    },
    {
      _id: 2,
      name: "Tai - Mũi - Họng",
      description:
        "Chuẩn quốc tế, đáp ứng tốt các nhu cầu của hơn 400 lượt khách hàng mỗi ngày đến khám và chữa bệnh chuyên sâu Tai – Mũi – Họng",
      img: ent,
    },
    {
      _id: 3,
      name: "Tim mạch",
      description:
        "Chúng tôi sẽ tư vấn cách chăm sóc bản thân và tim mạch bằng chế độ ăn uống, luyện tập hợp lý nhất cho từng trường hợp người bệnh đển người bệnh có trái tim khỏe mạnh",
      img: tim,
    },
    {
      _id: 4,
      name: "Nha khoa",
      description:
        "chăm sóc nhu cầu điều trị và thẩm mỹ răng hàm mặt của mọi thành viên trong gia đình bạn từ trẻ em đến người trưởng thành, người lớn tuổi với những dịch vụ hợp lý",
      img: nhakhoa,
    },
    {
      _id: 5,
      name: "Da liễu",
      description:
        "Da liễu là từ chuyên ngành bao gồm nhiều nhóm bệnh khác nhau về da, các bệnh lây qua đường tình dục và bệnh phong, khi bị tác động bởi yếu tố nào đó, làn da sẽ phản ứng và gây ra các bệnh da liễu.",
      img: dalieu,
    },
    {
      _id: 6,
      name: "Mắt",
      description:
        "Các chuyên gia về Mắt của Phòng Khám có chuyên môn sâu, từng tu nghiệp trong và ngoài nước",
      img: mat,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3
          className="text-primary  text-xl font-bold uppercase"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Dịch vụ của chúng tôi
        </h3>
        <h2 className="text-4xl mb-6">Cung cấp các dịch vụ sau</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {services?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
