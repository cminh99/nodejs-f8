module.exports = {
  multipleDocuments: function (arrDocs) {
    return arrDocs.map((doc) => doc.toObject());
  },

  singleDocument: function (doc) {
    return doc ? doc.toObject() : doc;
  }
};
