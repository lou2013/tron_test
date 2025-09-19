import type { FromSchema } from 'json-schema-to-ts';

import * as schemas from './schemas';

export type AccountCreateaccountBodyParam = FromSchema<typeof schemas.AccountCreateaccount.body>;
export type AccountCreateaccountResponse200 = FromSchema<
  (typeof schemas.AccountCreateaccount.response)['200']
>;
export type AccountCreateaccountResponse400 = FromSchema<
  (typeof schemas.AccountCreateaccount.response)['400']
>;
export type AccountGetaccountBodyParam = FromSchema<typeof schemas.AccountGetaccount.body>;
export type AccountGetaccountResponse200 = FromSchema<
  (typeof schemas.AccountGetaccount.response)['200']
>;
export type AccountGetaccountResponse400 = FromSchema<
  (typeof schemas.AccountGetaccount.response)['400']
>;
export type AccountResourcesFreezebalanceBodyParam = FromSchema<
  typeof schemas.AccountResourcesFreezebalance.body
>;
export type AccountResourcesFreezebalanceResponse200 = FromSchema<
  (typeof schemas.AccountResourcesFreezebalance.response)['200']
>;
export type AccountResourcesFreezebalanceResponse400 = FromSchema<
  (typeof schemas.AccountResourcesFreezebalance.response)['400']
>;
export type AccountResourcesUnfreezebalanceBodyParam = FromSchema<
  typeof schemas.AccountResourcesUnfreezebalance.body
>;
export type AccountResourcesUnfreezebalanceResponse200 = FromSchema<
  (typeof schemas.AccountResourcesUnfreezebalance.response)['200']
>;
export type AccountResourcesUnfreezebalanceResponse400 = FromSchema<
  (typeof schemas.AccountResourcesUnfreezebalance.response)['400']
>;
export type AccountpermissionupdateBodyParam = FromSchema<
  typeof schemas.Accountpermissionupdate.body
>;
export type AccountpermissionupdateResponse200 = FromSchema<
  (typeof schemas.Accountpermissionupdate.response)['200']
>;
export type AccountpermissionupdateResponse400 = FromSchema<
  (typeof schemas.Accountpermissionupdate.response)['400']
>;
export type BroadcasthexBodyParam = FromSchema<typeof schemas.Broadcasthex.body>;
export type BroadcasthexResponse200 = FromSchema<(typeof schemas.Broadcasthex.response)['200']>;
export type BroadcasthexResponse400 = FromSchema<(typeof schemas.Broadcasthex.response)['400']>;
export type BroadcasttransactionBodyParam = FromSchema<typeof schemas.Broadcasttransaction.body>;
export type BroadcasttransactionResponse200 = FromSchema<
  (typeof schemas.Broadcasttransaction.response)['200']
>;
export type Cancelallunfreezev2BodyParam = FromSchema<typeof schemas.Cancelallunfreezev2.body>;
export type Cancelallunfreezev2Response200 = FromSchema<
  (typeof schemas.Cancelallunfreezev2.response)['200']
>;
export type Cancelallunfreezev2Response400 = FromSchema<
  (typeof schemas.Cancelallunfreezev2.response)['400']
>;
export type ClearabiBodyParam = FromSchema<typeof schemas.Clearabi.body>;
export type ClearabiResponse200 = FromSchema<(typeof schemas.Clearabi.response)['200']>;
export type ClearabiResponse400 = FromSchema<(typeof schemas.Clearabi.response)['400']>;
export type CreateaddressBodyParam = FromSchema<typeof schemas.Createaddress.body>;
export type CreateaddressResponse200 = FromSchema<(typeof schemas.Createaddress.response)['200']>;
export type CreateaddressResponse400 = FromSchema<(typeof schemas.Createaddress.response)['400']>;
export type CreateassetissueBodyParam = FromSchema<typeof schemas.Createassetissue.body>;
export type CreateshieldedcontractparametersBodyParam = FromSchema<
  typeof schemas.Createshieldedcontractparameters.body
>;
export type CreateshieldedcontractparametersResponse200 = FromSchema<
  (typeof schemas.Createshieldedcontractparameters.response)['200']
>;
export type CreateshieldedcontractparametersResponse400 = FromSchema<
  (typeof schemas.Createshieldedcontractparameters.response)['400']
>;
export type CreatespendauthsigBodyParam = FromSchema<typeof schemas.Createspendauthsig.body>;
export type CreatespendauthsigResponse200 = FromSchema<
  (typeof schemas.Createspendauthsig.response)['200']
>;
export type CreatespendauthsigResponse400 = FromSchema<
  (typeof schemas.Createspendauthsig.response)['400']
>;
export type CreatetransactionBodyParam = FromSchema<typeof schemas.Createtransaction.body>;
export type CreatetransactionResponse200 = FromSchema<
  (typeof schemas.Createtransaction.response)['200']
>;
export type CreatetransactionResponse400 = FromSchema<
  (typeof schemas.Createtransaction.response)['400']
>;
export type CreatewitnessBodyParam = FromSchema<typeof schemas.Createwitness.body>;
export type CreatewitnessResponse200 = FromSchema<(typeof schemas.Createwitness.response)['200']>;
export type CreatewitnessResponse400 = FromSchema<(typeof schemas.Createwitness.response)['400']>;
export type Delegateresource1BodyParam = FromSchema<typeof schemas.Delegateresource1.body>;
export type Delegateresource1Response200 = FromSchema<
  (typeof schemas.Delegateresource1.response)['200']
>;
export type Delegateresource1Response400 = FromSchema<
  (typeof schemas.Delegateresource1.response)['400']
>;
export type EasytransferBodyParam = FromSchema<typeof schemas.Easytransfer.body>;
export type EasytransferResponse200 = FromSchema<(typeof schemas.Easytransfer.response)['200']>;
export type EasytransferResponse400 = FromSchema<(typeof schemas.Easytransfer.response)['400']>;
export type EasytransferassetBodyParam = FromSchema<typeof schemas.Easytransferasset.body>;
export type EasytransferassetResponse200 = FromSchema<
  (typeof schemas.Easytransferasset.response)['200']
>;
export type EasytransferassetResponse400 = FromSchema<
  (typeof schemas.Easytransferasset.response)['400']
>;
export type EasytransferassetbyprivateBodyParam = FromSchema<
  typeof schemas.Easytransferassetbyprivate.body
>;
export type EasytransferassetbyprivateResponse200 = FromSchema<
  (typeof schemas.Easytransferassetbyprivate.response)['200']
>;
export type EasytransferassetbyprivateResponse400 = FromSchema<
  (typeof schemas.Easytransferassetbyprivate.response)['400']
>;
export type EasytransferbyprivateBodyParam = FromSchema<typeof schemas.Easytransferbyprivate.body>;
export type EasytransferbyprivateResponse200 = FromSchema<
  (typeof schemas.Easytransferbyprivate.response)['200']
>;
export type EasytransferbyprivateResponse400 = FromSchema<
  (typeof schemas.Easytransferbyprivate.response)['400']
>;
export type EstimateenergyBodyParam = FromSchema<typeof schemas.Estimateenergy.body>;
export type EstimateenergyResponse200 = FromSchema<(typeof schemas.Estimateenergy.response)['200']>;
export type EstimateenergyResponse400 = FromSchema<(typeof schemas.Estimateenergy.response)['400']>;
export type ExchangecreateBodyParam = FromSchema<typeof schemas.Exchangecreate.body>;
export type ExchangecreateResponse200 = FromSchema<(typeof schemas.Exchangecreate.response)['200']>;
export type ExchangecreateResponse400 = FromSchema<(typeof schemas.Exchangecreate.response)['400']>;
export type ExchangeinjectBodyParam = FromSchema<typeof schemas.Exchangeinject.body>;
export type ExchangeinjectResponse200 = FromSchema<(typeof schemas.Exchangeinject.response)['200']>;
export type ExchangeinjectResponse400 = FromSchema<(typeof schemas.Exchangeinject.response)['400']>;
export type ExchangetransactionBodyParam = FromSchema<typeof schemas.Exchangetransaction.body>;
export type ExchangetransactionResponse200 = FromSchema<
  (typeof schemas.Exchangetransaction.response)['200']
>;
export type ExchangetransactionResponse400 = FromSchema<
  (typeof schemas.Exchangetransaction.response)['400']
>;
export type ExchangewithdrawBodyParam = FromSchema<typeof schemas.Exchangewithdraw.body>;
export type ExchangewithdrawResponse200 = FromSchema<
  (typeof schemas.Exchangewithdraw.response)['200']
>;
export type ExchangewithdrawResponse400 = FromSchema<
  (typeof schemas.Exchangewithdraw.response)['400']
>;
export type Freezebalancev21BodyParam = FromSchema<typeof schemas.Freezebalancev21.body>;
export type Freezebalancev21Response200 = FromSchema<
  (typeof schemas.Freezebalancev21.response)['200']
>;
export type Freezebalancev21Response400 = FromSchema<
  (typeof schemas.Freezebalancev21.response)['400']
>;
export type GenerateaddressResponse200 = FromSchema<
  (typeof schemas.Generateaddress.response)['200']
>;
export type GenerateaddressResponse400 = FromSchema<
  (typeof schemas.Generateaddress.response)['400']
>;
export type GetaccountbalanceBodyParam = FromSchema<typeof schemas.Getaccountbalance.body>;
export type GetaccountbalanceResponse200 = FromSchema<
  (typeof schemas.Getaccountbalance.response)['200']
>;
export type GetaccountbalanceResponse400 = FromSchema<
  (typeof schemas.Getaccountbalance.response)['400']
>;
export type GetaccountnetBodyParam = FromSchema<typeof schemas.Getaccountnet.body>;
export type GetaccountnetResponse200 = FromSchema<(typeof schemas.Getaccountnet.response)['200']>;
export type GetaccountresourceBodyParam = FromSchema<typeof schemas.Getaccountresource.body>;
export type GetaccountresourceResponse200 = FromSchema<
  (typeof schemas.Getaccountresource.response)['200']
>;
export type GetaccountresourceResponse400 = FromSchema<
  (typeof schemas.Getaccountresource.response)['400']
>;
export type GetakfromaskBodyParam = FromSchema<typeof schemas.Getakfromask.body>;
export type GetakfromaskResponse200 = FromSchema<(typeof schemas.Getakfromask.response)['200']>;
export type GetakfromaskResponse400 = FromSchema<(typeof schemas.Getakfromask.response)['400']>;
export type GetassetissuebyaccountBodyParam = FromSchema<
  typeof schemas.Getassetissuebyaccount.body
>;
export type GetassetissuebyidBodyParam = FromSchema<typeof schemas.Getassetissuebyid.body>;
export type GetassetissuebynameCopyBodyParam = FromSchema<
  typeof schemas.GetassetissuebynameCopy.body
>;
export type GetassetissuelistbynameCopyBodyParam = FromSchema<
  typeof schemas.GetassetissuelistbynameCopy.body
>;
export type Getavailableunfreezecount1BodyParam = FromSchema<
  typeof schemas.Getavailableunfreezecount1.body
>;
export type Getavailableunfreezecount1Response200 = FromSchema<
  (typeof schemas.Getavailableunfreezecount1.response)['200']
>;
export type Getavailableunfreezecount1Response400 = FromSchema<
  (typeof schemas.Getavailableunfreezecount1.response)['400']
>;
export type GetbandwidthpricesResponse200 = FromSchema<
  (typeof schemas.Getbandwidthprices.response)['200']
>;
export type Getblock1BodyParam = FromSchema<typeof schemas.Getblock1.body>;
export type Getblock1Response200 = FromSchema<(typeof schemas.Getblock1.response)['200']>;
export type GetblockbalanceBodyParam = FromSchema<typeof schemas.Getblockbalance.body>;
export type GetblockbalanceResponse200 = FromSchema<
  (typeof schemas.Getblockbalance.response)['200']
>;
export type GetblockbalanceResponse400 = FromSchema<
  (typeof schemas.Getblockbalance.response)['400']
>;
export type GetblockbyidBodyParam = FromSchema<typeof schemas.Getblockbyid.body>;
export type GetblockbyidResponse200 = FromSchema<(typeof schemas.Getblockbyid.response)['200']>;
export type GetblockbylimitnextBodyParam = FromSchema<typeof schemas.Getblockbylimitnext.body>;
export type GetblockbylimitnextResponse200 = FromSchema<
  (typeof schemas.Getblockbylimitnext.response)['200']
>;
export type GetblockbylimitnextResponse400 = FromSchema<
  (typeof schemas.Getblockbylimitnext.response)['400']
>;
export type GetburntrxResponse200 = FromSchema<(typeof schemas.Getburntrx.response)['200']>;
export type GetcandelegatedmaxsizeBodyParam = FromSchema<
  typeof schemas.Getcandelegatedmaxsize.body
>;
export type GetcandelegatedmaxsizeResponse200 = FromSchema<
  (typeof schemas.Getcandelegatedmaxsize.response)['200']
>;
export type GetcandelegatedmaxsizeResponse400 = FromSchema<
  (typeof schemas.Getcandelegatedmaxsize.response)['400']
>;
export type Getcanwithdrawunfreezeamount1BodyParam = FromSchema<
  typeof schemas.Getcanwithdrawunfreezeamount1.body
>;
export type Getcanwithdrawunfreezeamount1Response200 = FromSchema<
  (typeof schemas.Getcanwithdrawunfreezeamount1.response)['200']
>;
export type Getcanwithdrawunfreezeamount1Response400 = FromSchema<
  (typeof schemas.Getcanwithdrawunfreezeamount1.response)['400']
>;
export type GetcontractinfoBodyParam = FromSchema<typeof schemas.Getcontractinfo.body>;
export type GetcontractinfoResponse200 = FromSchema<
  (typeof schemas.Getcontractinfo.response)['200']
>;
export type GetcontractinfoResponse400 = FromSchema<
  (typeof schemas.Getcontractinfo.response)['400']
>;
export type GetdelegatedresourceBodyParam = FromSchema<typeof schemas.Getdelegatedresource.body>;
export type GetdelegatedresourceResponse200 = FromSchema<
  (typeof schemas.Getdelegatedresource.response)['200']
>;
export type GetdelegatedresourceResponse400 = FromSchema<
  (typeof schemas.Getdelegatedresource.response)['400']
>;
export type GetdelegatedresourceaccountindexBodyParam = FromSchema<
  typeof schemas.Getdelegatedresourceaccountindex.body
>;
export type GetdelegatedresourceaccountindexResponse200 = FromSchema<
  (typeof schemas.Getdelegatedresourceaccountindex.response)['200']
>;
export type GetdelegatedresourceaccountindexResponse400 = FromSchema<
  (typeof schemas.Getdelegatedresourceaccountindex.response)['400']
>;
export type Getdelegatedresourceaccountindexv21BodyParam = FromSchema<
  typeof schemas.Getdelegatedresourceaccountindexv21.body
>;
export type Getdelegatedresourceaccountindexv21Response200 = FromSchema<
  (typeof schemas.Getdelegatedresourceaccountindexv21.response)['200']
>;
export type Getdelegatedresourceaccountindexv21Response400 = FromSchema<
  (typeof schemas.Getdelegatedresourceaccountindexv21.response)['400']
>;
export type Getdelegatedresourcev2BodyParam = FromSchema<
  typeof schemas.Getdelegatedresourcev2.body
>;
export type Getdelegatedresourcev2Response200 = FromSchema<
  (typeof schemas.Getdelegatedresourcev2.response)['200']
>;
export type Getdelegatedresourcev2Response400 = FromSchema<
  (typeof schemas.Getdelegatedresourcev2.response)['400']
>;
export type GetdiversifierResponse200 = FromSchema<(typeof schemas.Getdiversifier.response)['200']>;
export type GetdiversifierResponse400 = FromSchema<(typeof schemas.Getdiversifier.response)['400']>;
export type GetexpandedspendingkeyBodyParam = FromSchema<
  typeof schemas.Getexpandedspendingkey.body
>;
export type GetexpandedspendingkeyResponse200 = FromSchema<
  (typeof schemas.Getexpandedspendingkey.response)['200']
>;
export type GetexpandedspendingkeyResponse400 = FromSchema<
  (typeof schemas.Getexpandedspendingkey.response)['400']
>;
export type GetincomingviewingkeyBodyParam = FromSchema<typeof schemas.Getincomingviewingkey.body>;
export type GetincomingviewingkeyResponse200 = FromSchema<
  (typeof schemas.Getincomingviewingkey.response)['200']
>;
export type GetincomingviewingkeyResponse400 = FromSchema<
  (typeof schemas.Getincomingviewingkey.response)['400']
>;
export type GetnewshieldedaddressResponse200 = FromSchema<
  (typeof schemas.Getnewshieldedaddress.response)['200']
>;
export type GetnewshieldedaddressResponse400 = FromSchema<
  (typeof schemas.Getnewshieldedaddress.response)['400']
>;
export type GetnextmaintenancetimeResponse200 = FromSchema<
  (typeof schemas.Getnextmaintenancetime.response)['200']
>;
export type GetnextmaintenancetimeResponse400 = FromSchema<
  (typeof schemas.Getnextmaintenancetime.response)['400']
>;
export type GetnkfromnskBodyParam = FromSchema<typeof schemas.Getnkfromnsk.body>;
export type GetnkfromnskResponse200 = FromSchema<(typeof schemas.Getnkfromnsk.response)['200']>;
export type GetnkfromnskResponse400 = FromSchema<(typeof schemas.Getnkfromnsk.response)['400']>;
export type GetpaginatedassetissuelistBodyParam = FromSchema<
  typeof schemas.Getpaginatedassetissuelist.body
>;
export type GetpendingsizeResponse200 = FromSchema<(typeof schemas.Getpendingsize.response)['200']>;
export type GetpendingsizeResponse400 = FromSchema<(typeof schemas.Getpendingsize.response)['400']>;
export type GetproposalbyidBodyParam = FromSchema<typeof schemas.Getproposalbyid.body>;
export type GetproposalbyidResponse200 = FromSchema<
  (typeof schemas.Getproposalbyid.response)['200']
>;
export type GetproposalbyidResponse400 = FromSchema<
  (typeof schemas.Getproposalbyid.response)['400']
>;
export type GetspendingkeyResponse200 = FromSchema<(typeof schemas.Getspendingkey.response)['200']>;
export type GetspendingkeyResponse400 = FromSchema<(typeof schemas.Getspendingkey.response)['400']>;
export type GettransactionfrompendingBodyParam = FromSchema<
  typeof schemas.Gettransactionfrompending.body
>;
export type GettransactionfrompendingResponse200 = FromSchema<
  (typeof schemas.Gettransactionfrompending.response)['200']
>;
export type GettransactionfrompendingResponse400 = FromSchema<
  (typeof schemas.Gettransactionfrompending.response)['400']
>;
export type GettransactioninfobyblocknumBodyParam = FromSchema<
  typeof schemas.Gettransactioninfobyblocknum.body
>;
export type GettransactioninfobyblocknumResponse200 = FromSchema<
  (typeof schemas.Gettransactioninfobyblocknum.response)['200']
>;
export type GettransactioninfobyblocknumResponse400 = FromSchema<
  (typeof schemas.Gettransactioninfobyblocknum.response)['400']
>;
export type GettransactioninfobyidBodyParam = FromSchema<
  typeof schemas.Gettransactioninfobyid.body
>;
export type GettransactioninfobyidResponse200 = FromSchema<
  (typeof schemas.Gettransactioninfobyid.response)['200']
>;
export type GettransactionlistfrompendingResponse200 = FromSchema<
  (typeof schemas.Gettransactionlistfrompending.response)['200']
>;
export type GettransactionlistfrompendingResponse400 = FromSchema<
  (typeof schemas.Gettransactionlistfrompending.response)['400']
>;
export type GettransactionsignBodyParam = FromSchema<typeof schemas.Gettransactionsign.body>;
export type GettransactionsignResponse200 = FromSchema<
  (typeof schemas.Gettransactionsign.response)['200']
>;
export type GettransactionsignResponse400 = FromSchema<
  (typeof schemas.Gettransactionsign.response)['400']
>;
export type Gettriggerinputforshieldedtrc20ContractResponse200 = FromSchema<
  (typeof schemas.Gettriggerinputforshieldedtrc20Contract.response)['200']
>;
export type Gettriggerinputforshieldedtrc20ContractResponse400 = FromSchema<
  (typeof schemas.Gettriggerinputforshieldedtrc20Contract.response)['400']
>;
export type GetzenpaymentaddressBodyParam = FromSchema<typeof schemas.Getzenpaymentaddress.body>;
export type GetzenpaymentaddressResponse200 = FromSchema<
  (typeof schemas.Getzenpaymentaddress.response)['200']
>;
export type GetzenpaymentaddressResponse400 = FromSchema<
  (typeof schemas.Getzenpaymentaddress.response)['400']
>;
export type HttpGetapprovedlistBodyParam = FromSchema<typeof schemas.HttpGetapprovedlist.body>;
export type HttpGetapprovedlistResponse200 = FromSchema<
  (typeof schemas.HttpGetapprovedlist.response)['200']
>;
export type Isshieldedtrc20ContractnotespentBodyParam = FromSchema<
  typeof schemas.Isshieldedtrc20Contractnotespent.body
>;
export type Isshieldedtrc20ContractnotespentResponse200 = FromSchema<
  (typeof schemas.Isshieldedtrc20Contractnotespent.response)['200']
>;
export type Isshieldedtrc20ContractnotespentResponse400 = FromSchema<
  (typeof schemas.Isshieldedtrc20Contractnotespent.response)['400']
>;
export type ParticipateassetissueBodyParam = FromSchema<typeof schemas.Participateassetissue.body>;
export type ParticipateassetissueResponse200 = FromSchema<
  (typeof schemas.Participateassetissue.response)['200']
>;
export type ParticipateassetissueResponse400 = FromSchema<
  (typeof schemas.Participateassetissue.response)['400']
>;
export type ProposalapproveBodyParam = FromSchema<typeof schemas.Proposalapprove.body>;
export type ProposalapproveResponse200 = FromSchema<
  (typeof schemas.Proposalapprove.response)['200']
>;
export type ProposalapproveResponse400 = FromSchema<
  (typeof schemas.Proposalapprove.response)['400']
>;
export type ProposalcreateBodyParam = FromSchema<typeof schemas.Proposalcreate.body>;
export type ProposalcreateResponse200 = FromSchema<(typeof schemas.Proposalcreate.response)['200']>;
export type ProposalcreateResponse400 = FromSchema<(typeof schemas.Proposalcreate.response)['400']>;
export type ProposaldeleteBodyParam = FromSchema<typeof schemas.Proposaldelete.body>;
export type ProposaldeleteResponse200 = FromSchema<(typeof schemas.Proposaldelete.response)['200']>;
export type ProposaldeleteResponse400 = FromSchema<(typeof schemas.Proposaldelete.response)['400']>;
export type Scanshieldedtrc20NotesbyivkBodyParam = FromSchema<
  typeof schemas.Scanshieldedtrc20Notesbyivk.body
>;
export type Scanshieldedtrc20NotesbyivkResponse200 = FromSchema<
  (typeof schemas.Scanshieldedtrc20Notesbyivk.response)['200']
>;
export type Scanshieldedtrc20NotesbyivkResponse400 = FromSchema<
  (typeof schemas.Scanshieldedtrc20Notesbyivk.response)['400']
>;
export type Scanshieldedtrc20NotesbyovkBodyParam = FromSchema<
  typeof schemas.Scanshieldedtrc20Notesbyovk.body
>;
export type Scanshieldedtrc20NotesbyovkResponse200 = FromSchema<
  (typeof schemas.Scanshieldedtrc20Notesbyovk.response)['200']
>;
export type Scanshieldedtrc20NotesbyovkResponse400 = FromSchema<
  (typeof schemas.Scanshieldedtrc20Notesbyovk.response)['400']
>;
export type TransferassetBodyParam = FromSchema<typeof schemas.Transferasset.body>;
export type TransferassetResponse200 = FromSchema<(typeof schemas.Transferasset.response)['200']>;
export type TransferassetResponse400 = FromSchema<(typeof schemas.Transferasset.response)['400']>;
export type TriggerconstantcontractBodyParam = FromSchema<
  typeof schemas.Triggerconstantcontract.body
>;
export type TriggerconstantcontractResponse200 = FromSchema<
  (typeof schemas.Triggerconstantcontract.response)['200']
>;
export type TriggerconstantcontractResponse400 = FromSchema<
  (typeof schemas.Triggerconstantcontract.response)['400']
>;
export type TriggersmartcontractBodyParam = FromSchema<typeof schemas.Triggersmartcontract.body>;
export type TriggersmartcontractResponse200 = FromSchema<
  (typeof schemas.Triggersmartcontract.response)['200']
>;
export type TriggersmartcontractResponse400 = FromSchema<
  (typeof schemas.Triggersmartcontract.response)['400']
>;
export type Undelegateresource1BodyParam = FromSchema<typeof schemas.Undelegateresource1.body>;
export type Undelegateresource1Response200 = FromSchema<
  (typeof schemas.Undelegateresource1.response)['200']
>;
export type Undelegateresource1Response400 = FromSchema<
  (typeof schemas.Undelegateresource1.response)['400']
>;
export type UnfreezeassetBodyParam = FromSchema<typeof schemas.Unfreezeasset.body>;
export type UnfreezeassetResponse200 = FromSchema<(typeof schemas.Unfreezeasset.response)['200']>;
export type UnfreezeassetResponse400 = FromSchema<(typeof schemas.Unfreezeasset.response)['400']>;
export type Unfreezebalancev21BodyParam = FromSchema<typeof schemas.Unfreezebalancev21.body>;
export type Unfreezebalancev21Response200 = FromSchema<
  (typeof schemas.Unfreezebalancev21.response)['200']
>;
export type Unfreezebalancev21Response400 = FromSchema<
  (typeof schemas.Unfreezebalancev21.response)['400']
>;
export type UpdateaccountBodyParam = FromSchema<typeof schemas.Updateaccount.body>;
export type UpdateaccountResponse200 = FromSchema<(typeof schemas.Updateaccount.response)['200']>;
export type UpdateaccountResponse400 = FromSchema<(typeof schemas.Updateaccount.response)['400']>;
export type UpdatewitnessBodyParam = FromSchema<typeof schemas.Updatewitness.body>;
export type UpdatewitnessResponse200 = FromSchema<(typeof schemas.Updatewitness.response)['200']>;
export type ValidateaddressBodyParam = FromSchema<typeof schemas.Validateaddress.body>;
export type ValidateaddressResponse200 = FromSchema<
  (typeof schemas.Validateaddress.response)['200']
>;
export type ValidateaddressResponse400 = FromSchema<
  (typeof schemas.Validateaddress.response)['400']
>;
export type VotewitnessaccountBodyParam = FromSchema<typeof schemas.Votewitnessaccount.body>;
export type VotewitnessaccountResponse200 = FromSchema<
  (typeof schemas.Votewitnessaccount.response)['200']
>;
export type VotewitnessaccountResponse400 = FromSchema<
  (typeof schemas.Votewitnessaccount.response)['400']
>;
export type WalletDeploycontractBodyParam = FromSchema<typeof schemas.WalletDeploycontract.body>;
export type WalletDeploycontractResponse200 = FromSchema<
  (typeof schemas.WalletDeploycontract.response)['200']
>;
export type WalletDeploycontractResponse400 = FromSchema<
  (typeof schemas.WalletDeploycontract.response)['400']
>;
export type WalletGetblockbylatestnumBodyParam = FromSchema<
  typeof schemas.WalletGetblockbylatestnum.body
>;
export type WalletGetblockbylatestnumResponse200 = FromSchema<
  (typeof schemas.WalletGetblockbylatestnum.response)['200']
>;
export type WalletGetblockbylatestnumResponse400 = FromSchema<
  (typeof schemas.WalletGetblockbylatestnum.response)['400']
>;
export type WalletGetblockbynumBodyParam = FromSchema<typeof schemas.WalletGetblockbynum.body>;
export type WalletGetblockbynumResponse200 = FromSchema<
  (typeof schemas.WalletGetblockbynum.response)['200']
>;
export type WalletGetbrokerageBodyParam = FromSchema<typeof schemas.WalletGetbrokerage.body>;
export type WalletGetbrokerageResponse200 = FromSchema<
  (typeof schemas.WalletGetbrokerage.response)['200']
>;
export type WalletGetbrokerageResponse400 = FromSchema<
  (typeof schemas.WalletGetbrokerage.response)['400']
>;
export type WalletGetchainparametersResponse200 = FromSchema<
  (typeof schemas.WalletGetchainparameters.response)['200']
>;
export type WalletGetchainparametersResponse400 = FromSchema<
  (typeof schemas.WalletGetchainparameters.response)['400']
>;
export type WalletGetcontractBodyParam = FromSchema<typeof schemas.WalletGetcontract.body>;
export type WalletGetcontractResponse200 = FromSchema<
  (typeof schemas.WalletGetcontract.response)['200']
>;
export type WalletGetcontractResponse400 = FromSchema<
  (typeof schemas.WalletGetcontract.response)['400']
>;
export type WalletGetexchangebyidBodyParam = FromSchema<typeof schemas.WalletGetexchangebyid.body>;
export type WalletGetexchangebyidResponse200 = FromSchema<
  (typeof schemas.WalletGetexchangebyid.response)['200']
>;
export type WalletGetexchangebyidResponse400 = FromSchema<
  (typeof schemas.WalletGetexchangebyid.response)['400']
>;
export type WalletGetnodeinfoResponse200 = FromSchema<
  (typeof schemas.WalletGetnodeinfo.response)['200']
>;
export type WalletGetnodeinfoResponse400 = FromSchema<
  (typeof schemas.WalletGetnodeinfo.response)['400']
>;
export type WalletGetnowblockResponse200 = FromSchema<
  (typeof schemas.WalletGetnowblock.response)['200']
>;
export type WalletGetrewardBodyParam = FromSchema<typeof schemas.WalletGetreward.body>;
export type WalletGetrewardResponse200 = FromSchema<
  (typeof schemas.WalletGetreward.response)['200']
>;
export type WalletGetrewardResponse400 = FromSchema<
  (typeof schemas.WalletGetreward.response)['400']
>;
export type WalletGettransactionbyidBodyParam = FromSchema<
  typeof schemas.WalletGettransactionbyid.body
>;
export type WalletGettransactionbyidResponse200 = FromSchema<
  (typeof schemas.WalletGettransactionbyid.response)['200']
>;
export type WalletListexchangesMetadataParam = FromSchema<
  typeof schemas.WalletListexchanges.metadata
>;
export type WalletListexchangesResponse200 = FromSchema<
  (typeof schemas.WalletListexchanges.response)['200']
>;
export type WalletListexchangesResponse400 = FromSchema<
  (typeof schemas.WalletListexchanges.response)['400']
>;
export type WalletListnodesResponse200 = FromSchema<
  (typeof schemas.WalletListnodes.response)['200']
>;
export type WalletListnodesResponse400 = FromSchema<
  (typeof schemas.WalletListnodes.response)['400']
>;
export type WalletListproposalsResponse200 = FromSchema<
  (typeof schemas.WalletListproposals.response)['200']
>;
export type WalletListproposalsResponse400 = FromSchema<
  (typeof schemas.WalletListproposals.response)['400']
>;
export type WalletUpdateassetBodyParam = FromSchema<typeof schemas.WalletUpdateasset.body>;
export type WalletUpdateassetResponse200 = FromSchema<
  (typeof schemas.WalletUpdateasset.response)['200']
>;
export type WalletUpdateassetResponse400 = FromSchema<
  (typeof schemas.WalletUpdateasset.response)['400']
>;
export type WalletUpdatebrokerageBodyParam = FromSchema<typeof schemas.WalletUpdatebrokerage.body>;
export type WalletUpdatebrokerageResponse200 = FromSchema<
  (typeof schemas.WalletUpdatebrokerage.response)['200']
>;
export type WalletUpdatebrokerageResponse400 = FromSchema<
  (typeof schemas.WalletUpdatebrokerage.response)['400']
>;
export type WalletUpdateenergylimitBodyParam = FromSchema<
  typeof schemas.WalletUpdateenergylimit.body
>;
export type WalletUpdateenergylimitResponse200 = FromSchema<
  (typeof schemas.WalletUpdateenergylimit.response)['200']
>;
export type WalletUpdateenergylimitResponse400 = FromSchema<
  (typeof schemas.WalletUpdateenergylimit.response)['400']
>;
export type WalletUpdatesettingBodyParam = FromSchema<typeof schemas.WalletUpdatesetting.body>;
export type WalletUpdatesettingResponse200 = FromSchema<
  (typeof schemas.WalletUpdatesetting.response)['200']
>;
export type WalletUpdatesettingResponse400 = FromSchema<
  (typeof schemas.WalletUpdatesetting.response)['400']
>;
export type WithdrawbalanceBodyParam = FromSchema<typeof schemas.Withdrawbalance.body>;
export type WithdrawbalanceResponse200 = FromSchema<
  (typeof schemas.Withdrawbalance.response)['200']
>;
export type WithdrawbalanceResponse400 = FromSchema<
  (typeof schemas.Withdrawbalance.response)['400']
>;
export type WithdrawexpireunfreezeBodyParam = FromSchema<
  typeof schemas.Withdrawexpireunfreeze.body
>;
export type WithdrawexpireunfreezeResponse200 = FromSchema<
  (typeof schemas.Withdrawexpireunfreeze.response)['200']
>;
export type WithdrawexpireunfreezeResponse400 = FromSchema<
  (typeof schemas.Withdrawexpireunfreeze.response)['400']
>;
