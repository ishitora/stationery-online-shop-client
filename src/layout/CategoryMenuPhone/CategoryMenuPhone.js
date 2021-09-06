//小螢幕用的選單
import { useHistory } from 'react-router-dom';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import category from '../../config/category';
import LinkButton from '../../components/LinkButton/LinkButton';
import useStyles from './style';

function CategoryMenuPhone() {
  const history = useHistory();
  const classes = useStyles();
  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.link}
      nodeId={nodes.link}
      label={
        <div className={classes.category}>
          <LinkButton
            onClick={(e) => {
              e.preventDefault();
              handleClick(nodes.link);
            }}>
            {nodes.name}
          </LinkButton>
        </div>
      }>
      {Array.isArray(nodes.child)
        ? nodes.child.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  const handleClick = (link) => {
    history.push(`/search/?category=${link}`);
  };
  return (
    <div className={classes.root}>
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
