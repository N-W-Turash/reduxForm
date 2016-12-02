import React, {Component} from 'react';
import { connect } from 'react-redux';
import {formValueChanged} from './actions';

 class DemoForm extends Component{

    inputHandler(e) {
        const { dispatch } = this.props;
        return dispatch(formValueChanged(e.target.name, e.target.value));
    }

    textHandler(e) {
        const { dispatch } = this.props;
        return dispatch(formValueChanged(e.target.name, e.target.value));
    }

    radioHandler(e){
        const { dispatch } = this.props;
        return dispatch(formValueChanged(e.target.name, e.target.value));
    }

    selectHandler(e){
        const { dispatch } = this.props;
        return dispatch(formValueChanged(e.target.name, e.target.value));
    }

    checkHandler(e){
        const { dispatch } = this.props;
        const { form } = this.props;
       // form.check = !form.check
        //console.log(form.check)
        return dispatch(formValueChanged(e.target.name, e.target.value));
    }

    handleSubmit(event) {
      //console.log(this.state.selectedOption === 'male' ? 'Hello Mr. '+ this.state.value : 'Hello Miss '+ this.state.value);
      //console.log('Your message: ', this.state.text);
      //console.log('So you like ', this.state.selectVal);
      const { form } = this.props;
      event.preventDefault();
      //console.log(form.name);
      console.log(form.radio === 'male' ? 'Hello Mr. '+ form.name : 'Hello Miss '+ form.name);
      console.log('So you like ' + form.select);
    }

     render(){

        const { form } = this.props;
        return (
            <form  onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Name:
                    <br />
                    <input type="text" name="name" value={form.value} onChange={this.inputHandler.bind(this)} />
                </label>

                <br/><br />
                <label>
                    Message:
                    <br />
                    <textarea  name="message" value={form.value} onChange={this.textHandler.bind(this)}/>
                </label>
                <br/><br />
                <div className="radio">
                    <label>
                        <input type="radio" value="male" checked={form.radio == 'male'}  name="radio" onChange={this.radioHandler.bind(this)}/>
                        Male
                    </label>
                    <label>
                        <input type="radio" value="female" name="radio" checked={form.radio == 'female'} onChange={this.radioHandler.bind(this)}/>
                        Female
                    </label>
                </div>
                <br />
                <label>
                    Pick a Technology:
                    <select id="select" name="select" value = {form.value} onChange={this.selectHandler.bind(this)} >
                        <option value="jquery">jQuery</option>
                        <option value="angular js">Angular JS</option>
                        <option value="amber js">Amber JS</option>
                        <option value="react js">React JS</option>
                    </select>
                </label>
                <br /><br />
                <input type="checkbox" name="check" value="agree" checked={form.check} onChange={this.checkHandler.bind(this)}/> I agree to the
                terms and conditions<br />
                <div><input type="submit" value="Submit" disabled = {!form.name || !form.message || !form.radio || !form.check}/></div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        form: state.demoFormState,
    }
}

function mapDispatchToProps(dispatch) {
    return {dispatch};
}

export default DemoForm = connect(mapStateToProps, mapDispatchToProps)(DemoForm);