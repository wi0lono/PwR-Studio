import '@/styles/components/publishModal.scss';
import { DefaultButton, Icon, Label, Modal, Stack, TextField } from '@fluentui/react';
import React from 'react';
interface props {
    isOpen: boolean
    hideModal: Function
}
export const PublishModal = (props: props) => {
    return(
        <>
            <Modal
                isOpen={props.isOpen}
                isBlocking={true}
                onDismiss={() => props.hideModal()}
                className={'publish-modal-container'}
            >
                <Stack className='content'>
                    <Stack.Item>
                        <span className='header'>Get your project online</span>
                    </Stack.Item>
                    <Stack.Item>
                        <Stack horizontal className='input-fields'>
                            <Stack.Item>
                                <Label htmlFor={'installationUrl'}>Installation Url</Label>
                            </Stack.Item>
                            <Stack.Item>
                                <TextField id={'installationUrl'} />
                            </Stack.Item>
                        </Stack>
                        <Stack horizontal className='input-fields'>
                            <Stack.Item>
                                <Label htmlFor={'jbManagerSecret'}>JB Manager Secret</Label>
                            </Stack.Item>
                            <Stack.Item>
                                <TextField id={'jbManagerSecret'} />
                            </Stack.Item>
                        </Stack>
                        <Stack>
                            <Stack.Item>
                                <p>
                                    You can find installation URL & secret after you log in to JB Manager. Link to JB Manager: https://linktoJBManager.com
                                </p>
                            </Stack.Item>
                            <Stack.Item>
                                <p>
                                <Icon iconName="WarningSolid" /> The code generated by AI may contain errors. We recommend 
you to test the bot using chat feature and also test it after publishing,
before you do wide-scale release.
                                </p>
                            </Stack.Item>
                        </Stack>
                    </Stack.Item>
                    <Stack.Item>
                        <Stack horizontal className={'footer-buttons'}>
                            <Stack.Item>
                                <DefaultButton className={'primary-button'} onClick={() => props.hideModal()}>Publish</DefaultButton>
                            </Stack.Item>
                            <Stack.Item>
                                <DefaultButton onClick={() => props.hideModal()}>Cancel</DefaultButton>
                            </Stack.Item>
                        </Stack>
                    </Stack.Item>
                </Stack>
            </Modal>
        </>
    )
}

export default PublishModal;