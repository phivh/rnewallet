import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {AssetItem, H3, View} from 'components';
import {useAsset} from 'hooks';
import {IAsset} from 'types';

export const Assets = () => {
  const {assets, onGetAssets} = useAsset();

  useEffect(() => {
    onGetAssets();
  }, [onGetAssets]);
  return (
    <View>
      <FlatList
        refreshing={false}
        scrollEnabled={false}
        ListHeaderComponent={<H3 bold>Assets</H3>}
        data={assets}
        renderItem={({item}: {item: IAsset}) => (
          <AssetItem item={item} borderRadius />
        )}
      />
    </View>
  );
};
