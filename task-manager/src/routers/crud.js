

const updateCheck = (req, res, allowedUpdates) => {
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));
  if (!isValidOperation) {
    return res.status(400).send({error: 'Invalid update'})
  }
}

const getList = model => async (req, res) => {
  try {
    const models = await model.find({});
    res.status(200).send(models)
  } catch (error) {
    res.status(500).send(error)
  }
};

const getById = model => async (req, res) => {
  try {
    const m = await model.findById(req.params.id)
    if (!m) {
      return res.status(404).send()
    }
    res.status(200).send(m)
  } catch (error) {
    res.status(500).send(error)
  }
};

const createModel = model => async (req, res) => {
  const m = new model(req.body);

  try {
    await m.save();
    res.status(201).send(m)
  } catch (e) {
    res.status(400).send(error)
  }
};

const updateModel = model => async (req, res) => {
  try {
    const m = await model.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if (!m) {
      return res.status(404).send()
    }
    res.send(m)
  } catch (e) {
    res.status(500).send(e)
  }
};

const deleteModel = model => async (req, res) => {
  try {
    const m = await model.findByIdAndDelete(req.params.id);
    if (!m) {
      return res.status(404).send()
    }
    res.send(m)
  } catch (e) {
    res.status(500).send(e)
  }
};

module.exports = {
  updateCheck,
  getList,
  getById,
  createModel,
  updateModel,
  deleteModel
};
