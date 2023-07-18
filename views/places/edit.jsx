const React =require('react')
const Def =require('../default')

function edit_form(data){
    return(
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlfor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" defaultValue={data.place.name}/>
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlfor="pic">Place picture</label>
                            <input className="form-control" id="pic" name="pic"defaultValue={data.place.pic}  />
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlfor="city">City</label>
                            <input className="form-control" id="city" name="city"defaultValue={data.place.city}/> 
                        </div>

                        <div className="form-group col-sm-6">
                            <label htmlfor="state">State</label>
                            <input className="form-control" id="state" name="state"defaultValue={data.place.state} />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlfor="cuisines">cuisines</label>
                            <input className="form-control" id="cuisines" name="cuisines"defaultValue={data.place.cuisines}/> 
                        </div>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Add Place"/>
                        
                 </form>
            </main>
        </Def>
    )
}
module.exports = edit_form