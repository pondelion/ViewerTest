import React from 'react';
import { bubble as BurgerMenu } from 'react-burger-menu';
import Scene1 from '../../scene/Scene1';
import { render } from 'react-dom';


interface State {
  isOpen: boolean;
}

interface Styles {
  bmBurgerBars: Partial<CSSStyleDeclaration>;
  bmBurgerBarsHover: Partial<CSSStyleDeclaration>;
  bmBurgerButton: Partial<CSSStyleDeclaration>;
  bmCross: Partial<CSSStyleDeclaration>;
  bmCrossButton: Partial<CSSStyleDeclaration>;
  bmItemList: Partial<CSSStyleDeclaration>;
  bmItem: Partial<CSSStyleDeclaration>;
  bmMenuWrap: Partial<CSSStyleDeclaration>;
  bmMenu: Partial<CSSStyleDeclaration>;
  bmMorphShape: Partial<CSSStyleDeclaration>;
  bmOverlay: Partial<CSSStyleDeclaration>;
}

interface Props {
  bodyClassName?: string;
  burgerBarClassName?: string;
  burgerButtonClassName?: string;
  className?: string;
  crossButtonClassName?: string;
  crossClassName?: string;
  customBurgerIcon?: JSX.Element | false;
  customCrossIcon?: JSX.Element | false;
  customOnKeyDown?(event: React.KeyboardEvent): void;
  disableAutoFocus?: boolean;
  disableCloseOnEsc?: boolean;
  disableOverlayClick?: boolean;
  htmlClassName?: string;
  id?: string;
  isOpen?: boolean;
  itemClassName?: string;
  itemListClassName?: string;
  menuClassName?: string;
  morphShapeClassName?: string;
  noOverlay?: boolean;
  onStateChange?(state: State): void;
  // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
  // styles && styles.outerContainer ? PropTypes.string.isRequired : PropTypes.string
  outerContainerId?: string;
  overlayClassName?: string;
  // TODO (Rajab) This can be improved, though I do not know how. From PropTypes:
  // styles && styles.pageWrap ? PropTypes.string.isRequired : PropTypes.string,
  pageWrapId?: string;
  right?: boolean;
  styles?: Styles;
  width?: number | string;
}

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '0.5em 1.5em 0',
    fontSize: '1.5em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block',
    padding: '0.6em',
    color: '#fffce1',
    outline: 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}


export class BubbleMenu extends React.Component<Props> {

  private _SCENE_LIST: string[] = [
    'Scene2', 'Scene3', 'Scene4'
  ];

  constructor(props: Props) {
    super(props);
  }

  render() {
    const items = this._SCENE_LIST.map(e => {
      return (
        <a id={e} className="menu-item" href="/">{e}</a>
      )
    })
    return (
      <div className="App">
        <BurgerMenu
          styles={styles}
          onStateChange={this.onStateChange}
        >
          <a id='Scene1' className="menu-item" href="#" onClick={e => render(<Scene1/>, document.getElementById('scene'))}>Scene1</a>
          {items}
        </BurgerMenu>
      </div>
    )
  }

  onStateChange = (state: State): void => {
    console.log(state.isOpen);
  }
}

export default BubbleMenu;
