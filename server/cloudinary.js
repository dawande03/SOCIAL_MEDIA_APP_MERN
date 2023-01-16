const cloudinary = require("cloudinary")

cloudinary.config({
    cloud_name: "dj6zletwk",
    api_key: "681657541545593",
    api_secret: "XBDXTat1LaPCdp5ePGF9JRAuU_A"
  });

module.exports = {cloudinary}