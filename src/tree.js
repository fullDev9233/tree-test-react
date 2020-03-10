import React from 'react';
 
class TreeNode extends React.Component {
    
    cleanse(obj, props) {
        Object.keys(props).map(idx => {
            if (props[idx] !== null && props[idx] !== undefined) {
                if (typeof props[idx] === "object") {
                    let temp = {};
                    obj[idx] = this.cleanse(temp, props[idx]);
                } else {
                    let item = obj;
                    item[idx] = props[idx];
                    obj = Object.assign({}, obj, item);
                }
            }
            return idx;
        });
        return obj;
    }
    
    render() {
        const tree = this.cleanse({}, this.props.node);
        console.log(tree)
        
        return (
            <div>
                
            </div>
        );
    }
}

const myObj = {
    a : 'foo',
    b : 'bar',
    c : null,
    d : undefined,
    e : 0,
    f : {
        a : 'fuz',
        b : null,
        c : {
            a : 'biz',
            b : 'buz',
            c : [
                {
                    a : 'foo',
                    b : 'bar',
                    c : null,
                    d : undefined,
                    e : 0,
                    f : false
                },
                {
                    a : 'foo',
                    b : 'bar',
                    c : null,
                    d : undefined,
                    e : 0
                },
                {
                    a : 'foo',
                    b : 'bar',
                    c : null,
                    d : undefined,
                    e : 0
                }
            ]
        }
    }
};
  
export default function RecursiveTreeView() {
    return (
        <TreeNode node={myObj} />
    );
}
