import {
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { PhotoState } from 'redux/reducer/photo.reducer';
import { StoreState } from 'redux/store';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop: 25,
    },
    gridList: {
      width: 900,
      height: 800,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })
);

const ListItems = () => {
  const classes = useStyles();
  const items = useSelector<StoreState, PhotoState>((state) => state.photos);
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList} cols={4}>
        {items.map((tile, index) => (
          <GridListTile key={`${tile.title}-${index}`}>
            <img src={tile.media.m} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>By: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ListItems;
