import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: "cover",
      }}
      className="p-10 mt-40"
    >
      <div className="footer">
        <div>
          <span className="footer-title">Dịch vụ</span>
          <a className="link link-hover">Đặt hẹn</a>
          <a className="link link-hover">Bác sĩ</a>
          <a className="link link-hover">Cơ sở</a>
        </div>
        <div>
          <span className="footer-title">Liên hệ</span>
          <a className="link link-hover">Tuyển dụng</a>
          <a className="link link-hover">Địa chỉ</a>
          <a className="link link-hover">Email</a>
        </div>
        <div>
          <span className="footer-title">Hỗ trợ</span>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Chính sách bảo mật</a>
          <a className="link link-hover">Chính sách sử dụng</a>
          <a className="link link-hover">Chính sách hoàn tiền</a>
        </div>
      </div>
      <div className="my-10 text-center">
        <p>Copyright © 2024 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
