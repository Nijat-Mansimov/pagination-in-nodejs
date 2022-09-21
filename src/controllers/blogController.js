const axios = require("axios");

const searchLetter = async (req, res) => {
    const letter = req.body.search;
    try {
      const blogAPI = await axios.get(
        "https://emrealtunbilek.com/wp-json/wp/v2/posts?search=" + letter
      );
      res.render("./blogs/index", { blogs: blogAPI.data });
    //   console.log(blogAPI.data);
    } catch (err) {
      res.json({
        errorMessage: err,
      });
    }
  };

const getAllBlog = async (req, res) => {
    let pagination = "";
    let activePage = 1;
    if (req.query.page) {
        pagination = "page=" + req.query.page;
        activePage = req.query.page;
    }
  try {
    const blogAPI = await axios.get(
      "https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20&" + pagination
    );
    res.render("./blogs/index", { activePage, blogs: blogAPI.data, paginationDetails: blogAPI.headers });
    // console.log(blogAPI.headers);
  } catch (err) {
    res.json({
      errorMessage: err,
    });
  }
};

const onlyGetOneBlog = async (req, res) => {
  let blogID = req.params.id;
  try {
    const oneBlog = await axios.get(
      "https://emrealtunbilek.com/wp-json/wp/v2/posts/" + blogID
    );
    res.render("./blogs/blog", { blog: oneBlog.data});
  } catch (err) {
    res.json({
      errorMessage: err.message,
      errorName: err.name,
    });
  }
};

module.exports = {
  getAllBlog,
  onlyGetOneBlog,
  searchLetter
};
