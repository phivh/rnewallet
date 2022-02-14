// @ts-nocheck
import React, {useCallback, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
  AssetItem,
  Button,
  Container,
  Content,
  H3,
  Input,
  Modal,
  P,
  View,
} from 'components';
import {FlatList, Image, Platform, StyleSheet} from 'react-native';
import {Spacing, Colors} from 'theme';
import i18n from 'translations';
import {Close, Contact, Images, Stack} from 'assets';
import {NavigationService} from 'navigation';
import {IAsset} from 'types';
import {useAsset, useAuth} from 'hooks';
import {formatCurrency, maskAccountNumber} from 'utils';

const t = (key: string, options?: any) =>
  i18n.t(`screens.transfer.${key}`, options);
export const Transfer = () => {
  const {allAssets, assetDefault, onTransfer} = useAsset();
  const {accountDefault} = useAuth();
  const [visible, setVisible] = useState(false);
  const [asset, setAsset] = useState(assetDefault);
  const [confirmSend, setConfirmSend] = useState(false);
  const [availableBalance, setAvailableBalance] = useState(
    assetDefault?.balance,
  );
  const {handleSubmit, control, setValue, watch} = useForm<{
    account_number: string;
    to: string;
    currency: string;
    amount: string | undefined;
  }>({
    defaultValues: {
      account_number: `My Wallet (${maskAccountNumber(
        String(accountDefault?.account_number),
      )})`,
      to: `${maskAccountNumber('7300377738884445')}`,
      currency: assetDefault?.currency,
      amount: undefined,
    },
  });

  const currencyAsset = watch('currency');
  const currentAmount = watch('amount');

  const onCancel = useCallback(() => NavigationService.goBack(), []);

  const onSend = useCallback(
    (data: any) => {
      const formData = {
        asset_id: asset?.id,
        amount: Number(data.amount),
        fee: 0,
      };
      onTransfer(formData, () => setConfirmSend(c => !c));
    },
    [setConfirmSend, onTransfer, asset],
  );

  const onItemPress = useCallback(
    (item: IAsset) => {
      setAsset(item);
      setValue('currency', item.currency);
      setAvailableBalance(item.balance);
      setVisible(vs => !vs);
    },
    [setVisible, setValue, setAvailableBalance, setAsset],
  );

  const onSetAmount = useCallback(
    (amount: number) => {
      setValue('amount', String(amount));
    },
    [setValue],
  );

  return (
    <>
      <Container white style={Styles.container}>
        <Content>
          <View>
            <Controller
              name="account_number"
              control={control}
              render={({field}) => {
                return (
                  <Input
                    {...field}
                    dark
                    marginRight={20}
                    editable={false}
                    testID="inputFrom"
                    label={t('form.from')}
                    style={Styles.disabledInput}
                  />
                );
              }}
            />
          </View>
          <View>
            <Controller
              name="to"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  dark
                  marginRight={20}
                  editable={true}
                  testID="inputTo"
                  label={t('form.to')}
                  rightIcon={
                    <Button
                      style={Styles.iconStack}
                      title=""
                      icon={<Contact />}
                    />
                  }
                />
              )}
            />
          </View>
          <View>
            <Controller
              name="currency"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  value={field.value.toUpperCase()}
                  dark
                  marginRight={20}
                  editable={false}
                  testID="inputAsset"
                  label={t('form.asset')}
                  style={Styles.assetInput}
                  leftIcon={
                    <Button
                      style={Styles.iconCurrency}
                      title=""
                      icon={
                        <Image
                          source={Images.assets[currencyAsset]}
                          style={Styles.iconAsset}
                          width={24}
                          height={24}
                        />
                      }
                    />
                  }
                  rightIcon={
                    <Button
                      onPress={() => setVisible(true)}
                      style={Styles.iconStack}
                      title=""
                      icon={<Stack />}
                    />
                  }
                />
              )}
            />
          </View>
          <View>
            <Controller
              name="amount"
              control={control}
              render={({field}) => (
                <Input
                  {...field}
                  dark
                  marginRight={20}
                  editable={true}
                  testID="inputAsset"
                  label={t('form.amount')}
                  keyboardType="number-pad"
                  rightLabel={t('form.available', {
                    balance: formatCurrency(
                      availableBalance,
                      currencyAsset?.toUpperCase(),
                    ),
                  })}
                  rightLabelStyle={Styles.rightLabel}
                  rightIcon={
                    <Button
                      onPress={() => onSetAmount(availableBalance)}
                      style={Styles.max}
                      title="max"
                      titleStyle={Styles.maxTxt}
                    />
                  }
                  error={{
                    errorMessage:
                      Number(field.value) > availableBalance
                        ? 'Insufficient balance.'
                        : null,
                  }}
                />
              )}
            />
          </View>
        </Content>
        <View style={Styles.footer} row content="between">
          <Button
            onPress={onCancel}
            style={Styles.btnCancel}
            title={i18n.t('actions.cancel')}
            titleStyle={Styles.titleStyle}
          />
          <Button
            disabled={
              !currentAmount || Number(currentAmount) > availableBalance
            }
            onPress={handleSubmit(onSend)}
            style={Styles.btnSend}
            gradient
            title={i18n.t('actions.send')}
          />
        </View>
      </Container>
      <Modal transparent={true} animationType="fade" visible={visible}>
        <Container style={Styles.modalContainer}>
          <Content padding={0} style={Styles.modalContent}>
            <View style={Styles.modalHeader}>
              <H3 bold center>
                Assets
              </H3>
              <Button
                style={Styles.btnClose}
                title=""
                onPress={() => setVisible(false)}
                icon={<Close />}
              />
            </View>
            <FlatList
              scrollEnabled={true}
              data={allAssets}
              renderItem={({item}: {item: IAsset}) => (
                <AssetItem disabled={false} item={item} onPress={onItemPress} />
              )}
            />
          </Content>
        </Container>
      </Modal>
      <Modal transparent={true} animationType="fade" visible={confirmSend}>
        <Container
          style={[Styles.modalContainer, Styles.confirmModalContainer]}>
          <Content
            padding={0}
            style={[Styles.modalContent, Styles.modalConfirmContent]}>
            <View style={Styles.modalHeader}>
              <H3 bold center>
                {t('send.title')}
              </H3>
            </View>
            <Content>
              <P style={Styles.descSend}>
                {t('send.desc', {
                  amount: formatCurrency(
                    currentAmount,
                    currencyAsset?.toUpperCase(),
                  ),
                })}
              </P>
              <Button
                onPress={() => {
                  setConfirmSend(false);
                  NavigationService.goBack();
                }}
                gradient
                style={[Styles.btnSend, {width: '100%'}]}
                title={i18n.t('actions.ok')}
              />
            </Content>
          </Content>
        </Container>
      </Modal>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    paddingTop: 27,
  },
  disabledInput: {
    backgroundColor: '#EDF1F7',
  },
  assetInput: {
    paddingLeft: 44,
    textTransform: 'uppercase',
  },
  iconAsset: {
    width: 24,
    height: 24,
  },
  iconCurrency: {
    height: 'auto',
  },
  iconStack: {
    height: 'auto',
  },
  rightLabel: {
    color: Colors.dark,
  },
  footer: {
    paddingHorizontal: Spacing.padding,
    marginBottom: Spacing.default[6],
  },
  max: {
    height: 'auto',
    borderRadius: Spacing.unit,
    backgroundColor: '#EEF3FB',
    paddingHorizontal: Spacing.unit / 2,
    paddingVertical: Spacing.unit / 2,
    width: 41,
    justifyContent: 'center',
    right: Spacing.default[0],
  },
  maxTxt: {
    color: Colors.lightGrey,
    fontSize: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  btnCancel: {
    width: '48%',
    backgroundColor: Colors.lighterGrey,
    justifyContent: 'center',
  },
  titleStyle: {
    color: Colors.blue,
  },
  btnSend: {
    width: '48%',
  },
  modalHeader: {
    paddingBottom: 16,
    borderBottomColor: '#C5CEE0',
    borderBottomWidth: 1,
    position: 'relative',
  },
  btnClose: {
    position: 'absolute',
    height: 'auto',
    padding: Spacing.unit,
    right: Spacing.default[2],
    top: -4,
  },
  modalContainer: {
    paddingHorizontal: 20,
    paddingVertical: 56,
    backgroundColor: 'rgba(21, 26, 48, 0.5)',
  },
  confirmModalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderRadius: 16,
  },
  modalConfirmContent: {
    maxHeight: 200,
    width: '100%',
  },
  descSend: {
    marginBottom: 24,
  }
});
