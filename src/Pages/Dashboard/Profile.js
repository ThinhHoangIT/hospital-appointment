import React, { useState } from "react";
import storage from "../../storage";
import api from "../../services/api";

const Profile = () => {
  const user = storage.getUser();
  const [userInfo, setUserInfo] = useState(user ?? {});
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const updateProfile = () => {
    api
      .updateUser(userInfo._id, userInfo)
      .then((response) => {
        console.log("Profile updated:", response);
        storage.setUser({ ...user, ...userInfo });
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const changePassword = (e) => {
    api
      .changePassword(
        userInfo.email,
        passwords.oldPassword,
        passwords.newPassword
      )
      .then((response) => {
        console.log("Profile updated:", response);
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            disabled
            value={userInfo.email}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block">Phone</label>
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block">Address</label>
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block">Birthday</label>
          <input
            type="date"
            name="birthday"
            value={userInfo.birthday}
            onChange={handleInputChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block">Gender</label>
          <select
            name="gender"
            value={userInfo.gender}
            onChange={handleInputChange}
            className="select select-bordered w-full"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className="btn btn-primary mt-4" onClick={updateProfile}>
          Update Profile
        </button>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Change Password</h3>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block">Old Password</label>
          <input
            type="password"
            name="oldPassword"
            value={passwords.oldPassword}
            onChange={handlePasswordChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handlePasswordChange}
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-secondary mt-4" onClick={changePassword}>
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Profile;
