//小螢幕用的選單
import { useHistory } from 'react-router-dom';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import category from '../../config/category';

function CategoryMenuPhone() {
  const history = useHistory();
  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.link}
      nodeId={nodes.link}
      label={nodes.name}
      onLabelClick={(e) => {
        e.preventDefault();
        handleClick(nodes.link);
      }}>
      {Array.isArray(nodes.child)
        ? nodes.child.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  const handleClick = (link) => {
    history.push(`/search/?category=${link}`);
  };
  return (
    <div>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect>
        {category.map((product) => renderTree(product))}
      </TreeView>
    </div>
  );
}

export default CategoryMenuPhone;
