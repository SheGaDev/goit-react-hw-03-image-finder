import { Component } from 'react';

type ModalProp = {
  webformatURL: string;
  tags: string;
};
type Props = {
  modal: ModalProp;
  showModal: (e: KeyboardEvent) => void;
};

class Modal extends Component<Props> {
  componentDidMount() {
    document.addEventListener('keydown', this.props.showModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.showModal);
  }

  render() {
    return (
      <div className='fixed left-0 top-0 z-[1200] flex h-[100vh] w-[100vw] items-center justify-center bg-[#00000040]'>
        <div
          style={{
            maxWidth: 'calc(100vw - 48px)',
            maxHeight: 'calc(100vh - 48px)',
          }}
        >
          <img src={this.props.modal.webformatURL} alt={this.props.modal.tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
