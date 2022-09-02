import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCamera } from '@fortawesome/free-solid-svg-icons'


function Form(props) {

    return (
        <form onSubmit={props.submit}>
            <h3>Plaats een blog bericht</h3>
            <label> Berichtnaam                
                <input placeholder="Geen titel" className="input light-grey-bg" type="text" name="title" />
            </label>
            <label> Categorie                
                <select onChange={props.handleChange} value={props.selectedCat} className="light-grey-bg" name="category_id">
                    <option>Geen categorie</option>
                    <option value="1">Tech</option>
                    <option value="2">Nieuws</option>
                    <option value="3">Sports</option>
                    <option value="4">Lokaal</option>
                </select>
            </label>
            <label className='label-header'> Header afbeelding
                <div className="opload-img-div light-grey-bg">
                    <FontAwesomeIcon className="camera-icon" icon={faCamera} />
                    <input name="image" className="file-input" type="file" />
                </div>                
            </label>
            <label className='label-message'> Bericht                
                <textarea rows={30} className="input form-content light-grey-bg" type="text" name="content"> </textarea>
            </label>
            <button className="btn btn-form">Bericht aanmaken</button>
        </form>
    )
}

export default Form