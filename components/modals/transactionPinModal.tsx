import { useAppDispatch, useAppSelector } from "../../hooks/state";
import { appendTokenInputData, deleteTokenInputData, setTnxPinProvided, toggleTnxPinModalState } from "../../state/reducers/tokenizedInputReducer";
import { tnxPinLength } from "../../static/constants";
import { isNullOrUndefined } from "../../utils/helpers";


export default function TransactionPinModal({ headerText = "Please enter transactin pin" }: any) {
    const dispatch = useAppDispatch();

    const isVisible = useAppSelector(
        (state: any) => state.authReducer?.isTnxPinModalOpen
    );

    const tokenInputData = useAppSelector(
        (state: any) => state.authReducer?.tokenInputData
    );

    const handleChange = ({ val, index }: any) => {
        dispatch(appendTokenInputData({ val, index }));
    }

    const handleClose = () => {
        dispatch(toggleTnxPinModalState({ isTnxPinModalOpen: false }));
    }

    const handleAuth = () => {
        if (isNullOrUndefined(tokenInputData) || tokenInputData.length < tnxPinLength) {
            dispatch(setTnxPinProvided({ isTnxPinProvided: false }));
            handleClose();
        } else
            dispatch(setTnxPinProvided({ isTnxPinProvided: true }));
            handleClose();
    }

    const handleDelete = (index: any) => {
        dispatch(deleteTokenInputData({ index }));
    }

    return (
        // <DialogModal
        //     isModalVisible={isVisible}
        //     onClosed={handleClose}
        //     modalTitle={headerText}
        //     showFooter={false}
        // >
        //     <TokenizedInput
        //         inputLength="4"
        //         onType={handleChange}
        //         onDelete={handleDelete}
        //     />
        //     <div className="flex justify-center">
        //         <PrimaryButton
        //             onClicked={handleAuth}
        //             buttonText={"Submit"}
        //             extraDivStyles={"w-1/2"}
        //         />
        //     </div>
        // </DialogModal>
        <></>
    )
}