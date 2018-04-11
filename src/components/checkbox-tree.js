import React ,{Component} from 'react';
import CheckboxTree from 'react-checkbox-tree';



const nodes = [{
    value: 'mars',
    label: 'Mars',
    children: [
        { value: 'phobos', label: 'Phobos' },
        { value: 'deimos', label: 'Deimos' },
    ],
}];
 
export default class SampleCheckBoxTree extends Component {
     constructor() {
        super();

        this.state = {
            checked: [],
            expanded: [],
        };
    }
    render() {
        return (
           <CheckboxTree
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
            />
        );
    }
}
