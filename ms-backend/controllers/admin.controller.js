const Media = require("../model/mediaSchema");

exports.addmovie = async (req, res, next) => {
  console.log(req.body);
  try {
    const { title, description, date, fixedlanguage } = req.body;
    const type = "movie";
    if (!title || !description || !date || !fixedlanguage) {
      return res.status(404).json({ error: "Fill all fields carefully" });
    }

    Media.findOne({ title: title }).then((movieexist) => {
      if (movieexist) {
        return res.status(403).json({ error: "Movie Exist" });
      }

      const media = new Media({
        title,
        description,
        date,
        fixedlanguage,
        type,
      });

      media
        .save()
        .then(() => {
          res.status(201).json({ message: "Movie Added Successfully" });
        })
        .catch((err) => res.status(500).json({ error: "Failed to add movie" }));
    });
  } catch (error) {
    next(error);
  }
};

exports.addseries = async (req, res, next) => {
  console.log(req.body);
  try {
    const { title, description, date, fixedlanguage } = req.body;
    const type = "series";
    if (!title || !description || !date || !fixedlanguage) {
      return res.status(404).json({ error: "Fill all fields carefully" });
    }

    Media.findOne({ title: title }).then((seriesexist) => {
      if (seriesexist) {
        return res.status(403).json({ error: "series Exist" });
      }

      const media = new Media({
        title,
        description,
        date,
        fixedlanguage,
        type,
      });

      media
        .save()
        .then(() => {
          res.status(201).json({ message: "series Added Successfully" });
        })
        .catch((err) =>
          res.status(500).json({ error: "Failed to add series" })
        );
    });
  } catch (error) {
    next(error);
  }
};

exports.allmedia = async (req, res, next) => {
  try {
    const data = await Media.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Data Not Found" });
  }
};

exports.onemedia = async (req, res, next) => {
  try {
    const data = await Media.findById(req.body.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Data Not Found" });
  }
};

exports.deletemedia = async (req, res, next) => {
  try {
    const id = req.body.id;
    

      const data = await Media.findByIdAndDelete(id)
        res.send(`Document has been deleted..`);   
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


