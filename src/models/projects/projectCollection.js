
const ProjectModel = require('./projectModel')

class ProjectCollection {

  constructor() {
    this.model = ProjectModel;
  }

  get(_id) {
    if (_id) {
      return this.model.findOne({ _id },{postedBy:0});
    }
    else {
      return this.model.find({},{postedBy:0});
    }
  }
  getAdmin(_id) {
    if (_id) {
      return this.model.findOne({ _id });
    }
    else {
      return this.model.find({});
    }
  }


  getByType(type,query) {
    if (type) {
      console.log(type,query)
      console.log('type at projects',type)
      const queryParam = {}
      queryParam[type]= query
      console.log('query param',queryParam);

      const results = this.model.find(queryParam)
      return results
    }
    else {
      console.log('out if')
      return this.model.find({});
      ;
    }
  }

  create(record) {
    let newRecord = new this.model(record);
    //.save is a post method
    return newRecord.save();
  }

  update(_id, record) {
    //find the record by the id argument and return it as a new record
    return this.model.findByIdAndUpdate(_id, record, { new: true });
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }

}
const project =new ProjectCollection();
module.exports = project;